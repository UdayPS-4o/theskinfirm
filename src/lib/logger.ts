// Logger utility for comprehensive logging and monitoring

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  FATAL = 4
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: Record<string, any>;
  error?: Error;
  userId?: string;
  sessionId?: string;
  requestId?: string;
  component?: string;
  action?: string;
  metadata?: Record<string, any>;
}

export interface LoggerConfig {
  level: LogLevel;
  enableConsole: boolean;
  enableRemote: boolean;
  remoteEndpoint?: string;
  enableLocalStorage: boolean;
  maxLocalStorageEntries: number;
  enablePerformanceTracking: boolean;
  enableUserTracking: boolean;
  sensitiveFields: string[];
}

class Logger {
  private config: LoggerConfig;
  private sessionId: string;
  private performanceMarks: Map<string, number> = new Map();

  constructor(config: Partial<LoggerConfig> = {}) {
    this.config = {
      level: LogLevel.INFO,
      enableConsole: true,
      enableRemote: false,
      enableLocalStorage: true,
      maxLocalStorageEntries: 1000,
      enablePerformanceTracking: true,
      enableUserTracking: false,
      sensitiveFields: ['password', 'token', 'apiKey', 'secret', 'creditCard'],
      ...config
    };

    this.sessionId = this.generateSessionId();
    this.initializeLogger();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeLogger(): void {
    // Set up global error handlers
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        this.error('Global error caught', {
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          error: event.error
        });
      });

      window.addEventListener('unhandledrejection', (event) => {
        this.error('Unhandled promise rejection', {
          reason: event.reason,
          promise: event.promise
        });
      });

      // Performance observer for monitoring
      if (this.config.enablePerformanceTracking && 'PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              this.performance(entry.name, entry.duration, {
                entryType: entry.entryType,
                startTime: entry.startTime
              });
            }
          });
          observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });
        } catch (error) {
          console.warn('Performance observer not supported:', error);
        }
      }
    }
  }

  private sanitizeData(data: any): any {
    if (typeof data !== 'object' || data === null) {
      return data;
    }

    if (Array.isArray(data)) {
      return data.map(item => this.sanitizeData(item));
    }

    const sanitized: any = {};
    for (const [key, value] of Object.entries(data)) {
      if (this.config.sensitiveFields.some(field => 
        key.toLowerCase().includes(field.toLowerCase())
      )) {
        sanitized[key] = '[REDACTED]';
      } else if (typeof value === 'object') {
        sanitized[key] = this.sanitizeData(value);
      } else {
        sanitized[key] = value;
      }
    }
    return sanitized;
  }

  private createLogEntry(
    level: LogLevel,
    message: string,
    context?: Record<string, any>,
    error?: Error
  ): LogEntry {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      sessionId: this.sessionId,
      requestId: this.generateRequestId(),
    };

    if (context) {
      entry.context = this.sanitizeData(context);
    }

    if (error) {
      entry.error = {
        name: error.name,
        message: error.message,
        stack: error.stack,
      } as any;
    }

    // Add user context if available
    if (this.config.enableUserTracking && typeof window !== 'undefined') {
      const userAgent = navigator.userAgent;
      const url = window.location.href;
      entry.metadata = {
        userAgent,
        url,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      };
    }

    return entry;
  }

  private generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.config.level;
  }

  private writeToConsole(entry: LogEntry): void {
    if (!this.config.enableConsole) return;

    const levelNames = ['DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL'];
    const levelColors = ['#888', '#007acc', '#ff8c00', '#ff4444', '#cc0000'];
    
    const style = `color: ${levelColors[entry.level]}; font-weight: bold;`;
    const timestamp = new Date(entry.timestamp).toLocaleTimeString();
    
    console.groupCollapsed(
      `%c[${levelNames[entry.level]}] ${timestamp} - ${entry.message}`,
      style
    );
    
    if (entry.context) {
      console.log('Context:', entry.context);
    }
    
    if (entry.error) {
      console.error('Error:', entry.error);
    }
    
    if (entry.metadata) {
      console.log('Metadata:', entry.metadata);
    }
    
    console.groupEnd();
  }

  private writeToLocalStorage(entry: LogEntry): void {
    if (!this.config.enableLocalStorage || typeof window === 'undefined') return;

    try {
      const storageKey = 'app_logs';
      const existingLogs = JSON.parse(localStorage.getItem(storageKey) || '[]');
      
      existingLogs.push(entry);
      
      // Limit the number of stored entries
      if (existingLogs.length > this.config.maxLocalStorageEntries) {
        existingLogs.splice(0, existingLogs.length - this.config.maxLocalStorageEntries);
      }
      
      localStorage.setItem(storageKey, JSON.stringify(existingLogs));
    } catch (error) {
      console.warn('Failed to write to localStorage:', error);
    }
  }

  private async writeToRemote(entry: LogEntry): Promise<void> {
    if (!this.config.enableRemote || !this.config.remoteEndpoint) return;

    try {
      await fetch(this.config.remoteEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      });
    } catch (error) {
      console.warn('Failed to send log to remote endpoint:', error);
    }
  }

  private log(
    level: LogLevel,
    message: string,
    context?: Record<string, any>,
    error?: Error
  ): void {
    if (!this.shouldLog(level)) return;

    const entry = this.createLogEntry(level, message, context, error);

    this.writeToConsole(entry);
    this.writeToLocalStorage(entry);
    
    if (this.config.enableRemote) {
      this.writeToRemote(entry).catch(console.warn);
    }
  }

  // Public logging methods
  debug(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  info(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.INFO, message, context);
  }

  warn(message: string, context?: Record<string, any>): void {
    this.log(LogLevel.WARN, message, context);
  }

  error(message: string, context?: Record<string, any>, error?: Error): void {
    this.log(LogLevel.ERROR, message, context, error);
  }

  fatal(message: string, context?: Record<string, any>, error?: Error): void {
    this.log(LogLevel.FATAL, message, context, error);
  }

  // Performance tracking
  startTimer(name: string): void {
    if (!this.config.enablePerformanceTracking) return;
    this.performanceMarks.set(name, performance.now());
  }

  endTimer(name: string, context?: Record<string, any>): number | null {
    if (!this.config.enablePerformanceTracking) return null;
    
    const startTime = this.performanceMarks.get(name);
    if (startTime === undefined) {
      this.warn(`Timer "${name}" was not started`);
      return null;
    }

    const duration = performance.now() - startTime;
    this.performanceMarks.delete(name);
    
    this.performance(name, duration, context);
    return duration;
  }

  performance(name: string, duration: number, context?: Record<string, any>): void {
    this.info(`Performance: ${name}`, {
      duration: `${duration.toFixed(2)}ms`,
      ...context
    });
  }

  // User action tracking
  userAction(action: string, component?: string, context?: Record<string, any>): void {
    this.info(`User action: ${action}`, {
      component,
      action,
      ...context
    });
  }

  // API call tracking
  apiCall(
    method: string,
    url: string,
    status: number,
    duration: number,
    context?: Record<string, any>
  ): void {
    const level = status >= 400 ? LogLevel.ERROR : LogLevel.INFO;
    this.log(level, `API ${method} ${url}`, {
      method,
      url,
      status,
      duration: `${duration.toFixed(2)}ms`,
      ...context
    });
  }

  // Database operation tracking
  dbOperation(
    operation: string,
    table: string,
    duration: number,
    context?: Record<string, any>
  ): void {
    this.info(`DB ${operation} on ${table}`, {
      operation,
      table,
      duration: `${duration.toFixed(2)}ms`,
      ...context
    });
  }

  // Form submission tracking
  formSubmission(
    formName: string,
    success: boolean,
    errors?: string[],
    context?: Record<string, any>
  ): void {
    const level = success ? LogLevel.INFO : LogLevel.WARN;
    this.log(level, `Form submission: ${formName}`, {
      formName,
      success,
      errors,
      ...context
    });
  }

  // Get logs from localStorage
  getLogs(): LogEntry[] {
    if (typeof window === 'undefined') return [];
    
    try {
      return JSON.parse(localStorage.getItem('app_logs') || '[]');
    } catch {
      return [];
    }
  }

  // Clear logs from localStorage
  clearLogs(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('app_logs');
  }

  // Export logs as JSON
  exportLogs(): string {
    return JSON.stringify(this.getLogs(), null, 2);
  }

  // Update configuration
  updateConfig(newConfig: Partial<LoggerConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }
}

// Create default logger instance
export const logger = new Logger({
  level: process.env.NODE_ENV === 'production' ? LogLevel.WARN : LogLevel.DEBUG,
  enableRemote: process.env.NODE_ENV === 'production',
  remoteEndpoint: process.env.NEXT_PUBLIC_LOG_ENDPOINT,
});

// Convenience functions
export const logError = (error: Error, context?: Record<string, any>) => {
  logger.error(error.message, context, error);
};

export const logApiCall = async <T>(
  apiCall: () => Promise<T>,
  method: string,
  url: string,
  context?: Record<string, any>
): Promise<T> => {
  const startTime = performance.now();
  
  try {
    const result = await apiCall();
    const duration = performance.now() - startTime;
    logger.apiCall(method, url, 200, duration, context);
    return result;
  } catch (error) {
    const duration = performance.now() - startTime;
    logger.apiCall(method, url, 500, duration, { ...context, error });
    throw error;
  }
};

export const logPerformance = <T>(
  operation: () => T,
  name: string,
  context?: Record<string, any>
): T => {
  logger.startTimer(name);
  try {
    const result = operation();
    logger.endTimer(name, context);
    return result;
  } catch (error) {
    logger.endTimer(name, { ...context, error });
    throw error;
  }
};

export const logAsyncPerformance = async <T>(
  operation: () => Promise<T>,
  name: string,
  context?: Record<string, any>
): Promise<T> => {
  logger.startTimer(name);
  try {
    const result = await operation();
    logger.endTimer(name, context);
    return result;
  } catch (error) {
    logger.endTimer(name, { ...context, error });
    throw error;
  }
};

// React hook for logging user actions
export const useLogger = () => {
  return {
    logUserAction: logger.userAction.bind(logger),
    logError: logError,
    logPerformance: logPerformance,
    logAsyncPerformance: logAsyncPerformance,
    startTimer: logger.startTimer.bind(logger),
    endTimer: logger.endTimer.bind(logger),
  };
};

export default logger;
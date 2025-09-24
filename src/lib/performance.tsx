import React, { useEffect, useState } from 'react';

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    renderTime: 0,
    memoryUsage: 0,
    componentCount: 0
  });

  useEffect(() => {
    const measurePerformance = () => {
      const renderStart = performance.now();
      
      requestAnimationFrame(() => {
        const renderEnd = performance.now();
        setMetrics(prev => ({
          ...prev,
          renderTime: renderEnd - renderStart,
          memoryUsage: 0
        }));
      });
    };

    measurePerformance();
  }, []);

  return metrics;
};

export const withPerformanceOptimization = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const OptimizedComponent = React.memo((props: P) => {
    const metrics = usePerformanceMonitor();
    
    useEffect(() => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Performance metrics for ${WrappedComponent.name}:`, metrics);
      }
    }, [metrics]);

    return React.createElement(WrappedComponent, props);
  });

  OptimizedComponent.displayName = `withPerformanceOptimization(${WrappedComponent.displayName || WrappedComponent.name})`;
  
  return OptimizedComponent;
};
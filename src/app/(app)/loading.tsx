export default function Loading() {
    return (
        <div className="w-full min-h-screen bg-[#FBEDE4] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 border-4 border-[#D4A380] border-t-transparent rounded-full animate-spin" />
                <p className="text-[#4A4036] text-lg font-medium">Loading...</p>
            </div>
        </div>
    );
}

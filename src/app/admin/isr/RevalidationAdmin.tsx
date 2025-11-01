"use client";

import { useState } from "react";

export default function RevalidationAdmin({ pages }: { pages: string[] }) {
  const [revalidating, setRevalidating] = useState<string | null>(null);
  const [revalidatingAll, setRevalidatingAll] = useState(false);

  const revalidate = async (path: string) => {
    setRevalidating(path);
    await fetch(`/admin/isr/api/revalidate?path=${path}`);
    setRevalidating(null);
  };

  const revalidateAll = async () => {
    setRevalidatingAll(true);
    await Promise.all(pages.map((path) => fetch(`/admin/isr/api/revalidate?path=${path}`)));
    setRevalidatingAll(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ISR Cache Management</h1>
      <div className="mb-4">
        <button
          onClick={revalidateAll}
          disabled={revalidatingAll}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
        >
          {revalidatingAll ? "Revalidating..." : "Revalidate All"}
        </button>
      </div>
      <ul className="space-y-2">
        {pages.map((page) => (
          <li
            key={page}
            className="flex items-center justify-between p-2 border rounded"
          >
            <span>{page}</span>
            <button
              onClick={() => revalidate(page)}
              disabled={!!revalidating}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded disabled:bg-gray-400"
            >
              {revalidating === page ? "Revalidating..." : "Revalidate"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

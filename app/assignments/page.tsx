"use client";

import React from "react";
import Link from "next/link";
import { useAssignmentStore } from "@/lib/store";

export default function AssignmentsPage() {
  const { assignments, loading } = useAssignmentStore();

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 max-w-(--breakpoint-2xl) mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-stone-900 tracking-tight">Assignments</h2>
        <p className="text-stone-500 mt-1">Manage and track your upcoming tasks.</p>
      </div>

      <div className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-100">
              <th className="px-8 py-4 text-xs font-bold text-stone-400 uppercase tracking-wider">Assignment</th>
              <th className="px-8 py-4 text-xs font-bold text-stone-400 uppercase tracking-wider">Course</th>
              <th className="px-8 py-4 text-xs font-bold text-stone-400 uppercase tracking-wider">Due Date</th>
              <th className="px-8 py-4 text-xs font-bold text-stone-400 uppercase tracking-wider">Status</th>
              <th className="px-8 py-4 text-xs font-bold text-stone-400 uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-50">
            {assignments.map((item) => (
              <tr key={item.id} className="hover:bg-stone-50 transition-colors group">
                <td className="px-8 py-6 font-bold text-stone-800 group-hover:text-[#F9A825] transition-colors">{item.title}</td>
                <td className="px-8 py-6 text-stone-600 text-sm">{item.course}</td>
                <td className="px-8 py-6 text-stone-500 text-sm font-medium">{item.due}</td>
                <td className="px-8 py-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    item.status === 'Submitted' ? 'bg-emerald-100 text-emerald-700' :
                    item.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 
                    item.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-stone-100 text-stone-600'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-8 py-6 text-right">
                  {item.status === 'Submitted' ? (
                    <Link 
                      href={`/assignments/${item.id}/edit`}
                      className="text-xs font-bold text-[#F9A825] hover:text-[#D97706] transition-colors border-2 border-amber-100 px-4 py-2 rounded-xl"
                    >
                      Edit Submission
                    </Link>
                  ) : (
                    <Link 
                      href={`/assignments/${item.id}/submit`}
                      className="text-xs font-bold text-white bg-[#F9A825] hover:bg-[#D97706] transition-colors px-4 py-2 rounded-xl"
                    >
                      Submit
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboard() {
  return (
    <div className="p-8 bg-black min-h-screen text-cyan-400">
      <header className="flex justify-between items-center mb-8 border-b border-cyan-900 pb-4">
        <h1 className="text-3xl font-bold tracking-tighter">TIVO-ULTRA <span className="text-white">COMMAND CENTER</span></h1>
        <Badge variant="outline" className="border-cyan-500 text-cyan-500 animate-pulse">SYSTEM LIVE</Badge>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-zinc-900 border-cyan-800">
          <CardHeader><CardTitle className="text-white">Payment Requests</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-400 mb-4">Pending bKash/Nagad verifications</p>
            <div className="text-2xl font-mono">0 PENDING</div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-cyan-800">
          <CardHeader><CardTitle className="text-white">Active Cron Jobs</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-400 mb-4">Long-term autonomous tasks</p>
            <div className="text-2xl font-mono text-green-500">1 RUNNING</div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-cyan-800">
          <CardHeader><CardTitle className="text-white">Hosting Health</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-400 mb-4">Vercel & Supabase usage</p>
            <div className="text-2xl font-mono text-blue-400">OPTIMAL</div>
          </CardContent>
        </Card>
      </div>

      <section className="mt-12 bg-zinc-950 p-6 rounded-lg border border-zinc-800">
        <h2 className="text-xl font-semibold mb-4 text-white">Direct AI Command (Autonomous Mode)</h2>
        <div className="flex gap-4">
          <Input 
            placeholder="e.g. 'Build a mobile app for the next 7 days and report daily'" 
            className="bg-black border-zinc-700 text-white"
          />
          <Button className="bg-cyan-600 hover:bg-cyan-500 text-black font-bold">EXECUTE</Button>
        </div>
      </section>
    </div>
  );
}

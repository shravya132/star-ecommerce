"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";

export default function ProfilePage() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  if (!isSignedIn) return <div>Please sign in to view your profile.</div>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <img
          src={user.profileImageUrl}
          alt={`${user.firstName} profile`}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 text-white font-semibold text-center px-2">
          {user.firstName}
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-1 text-center">
        {user.firstName} {user.lastName}
      </h1>
      <p className="text-gray-600 mb-3 text-center">
        {user.primaryEmailAddress?.emailAddress}
      </p>
    </div>
  );
}

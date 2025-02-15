import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useUserDetails = () => {
  const [user, setUser] = useState<{ green_points: number } | null>(null);

  const fetchUserDetails = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) return;

    const email = await AsyncStorage.getItem("userEmail");
    if (!email) return;

    try {
      const response = await fetch(`https://backend-amber-nine-53.vercel.app/api/user/${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    } catch {}
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return user;
};
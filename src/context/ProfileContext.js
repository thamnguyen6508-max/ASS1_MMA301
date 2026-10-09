import React, { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    name: 'Nguyen Thi Tham',
    bio: 'Software Engineering student at FPT University. Passionate about Mobile App Development.',
    avatar: 'https://i.pravatar.cc/300?img=47'
  });

  const updateProfile = (newProfile) => {
    setProfile({ ...profile, ...newProfile });
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfileContext() {
  return useContext(ProfileContext);
}

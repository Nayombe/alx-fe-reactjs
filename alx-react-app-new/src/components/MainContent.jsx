import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#eef2f3' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Featured Users</h2>
      
      {/* Old required text */}
      <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '20px' }}>
        I love to visit New York, Paris, and Tokyo.
      </p>

      {/* User Profiles */}
      <UserProfile name="Alice" age={25} bio="Loves traveling and photography." />
      <UserProfile name="Bob" age={30} bio="Enjoys hiking and cooking." />
      <UserProfile name="Charlie" age={28} bio="Passionate about technology and music." />
    </main>
  );
}

export default MainContent;


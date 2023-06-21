import React from 'react';
import { useSelector } from 'react-redux';

export default function Header({ onClear, count }) {
  const { notificationCount } = useSelector(({ notification }) => ({
    notificationCount: notification.count,
  }));
  return (
    <div
      style={{
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        background: '#004644',
        color: '#fff',
        fontSize: '24px',
        fontWeight: 700,
      }}
    >
      <div>Remote Server</div>
      <div
        style={{
          width: '350px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>count: {count}</div>
        <div>notification: {notificationCount}</div>
        <button onClick={onClear}>Clear</button>
      </div>
    </div>
  );
}

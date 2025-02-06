import React from 'react';

export default async function Page() {
  // Simulate a delay before rendering the component
  await new Promise(resolve => setTimeout(resolve, 10000));

  return (
    <div>group</div>
  );
}

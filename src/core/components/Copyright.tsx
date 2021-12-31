import { useState } from 'react';

export const Copyright = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <div className="container-fluid bg-secondary">
      <div className="row">
        <div className="col">
          <p className="text-center mt-2 mb-2">
            &copy; {year} Yunier Alvarez Portfolio
          </p>
        </div>
      </div>
    </div>
  );
};

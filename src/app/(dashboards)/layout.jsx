const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-12">
        {/* side nav */}
        <div className="col-span-3">
          <ul>
            <li>user list</li>
          </ul>
          <ul>
            <li>user activity</li>
          </ul>
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;

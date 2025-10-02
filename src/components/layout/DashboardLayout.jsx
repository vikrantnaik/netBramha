import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex relative">
        <Sidebar />
        <div className="ml-[260px] flex-1 bg-gray-50 min-h-screen">
          <Header />
          <main className="p-6 bg-[rgba(247,249,250,1)]">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;

import Header from "@/components/Header";
import RegisterContent from "@/components/RegisterContent";

export default function Home1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="min-h-[430px] w-full relative top-0 left-0 opacity-100">
        <div
          className="pt-[140px] h-auto w-full"
          style={{
            backgroundImage:
              "url(https://cinestar.com.vn/catalog/view/theme/default/images/bg-top.png),url(https://cinestar.com.vn/catalog/view/theme/default/images/bg-footer.jpg)",
          }}
        >
          <RegisterContent />
          {children}
        </div>
      </div>
    </>
  );
}

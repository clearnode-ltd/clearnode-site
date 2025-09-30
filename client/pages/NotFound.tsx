import Layout from "@/components/site/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[60vh] grid place-items-center">
        <div className="text-center">
          <h1 className="text-6xl font-black">404</h1>
          <p className="text-foreground/70 mt-2">Page not found</p>
          <Link to="/" className="inline-block mt-6 text-primary hover:underline">Back to home</Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;

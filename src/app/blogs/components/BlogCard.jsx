import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog, className = "" }) => {
  return (
    <div className={className}>
      <Link href={blog.href}>
        <div className="card-zoom w-full h-[327px] relative overflow-hidden group rounded-3xl">
          <div
            className={`card-zoom-image absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover ${blog.background} group-hover:scale-150`}
          />
          <div className="absolute inset-0 bg-[#23478e8a] rounded-[24px]" />
          <div className="absolute bottom-[20px] m-[20px]">
            <h3 className="text-white text-2xl font-aeonik tracking-wide mb-[15px]">
              {blog.title}
            </h3>
            <div className="flex gap-[10px] items-center">
              {blog.authorImg && (
                <div className="border border-[#707070] rounded-full w-[50px] h-[50px] relative overflow-hidden">
                  <Image
                    className="rounded-full"
                    src={blog.authorImg}
                    width="50"
                    height="50"
                    alt={blog.authorName}
                  />
                </div>
              )}
              <div>
                <b className="text-white font-aeonik tracking-wide">
                  {blog.authorName}
                </b>
                <p className="text-[#FFFFFF] text-lg font-bwmss01">
                  {blog.publicationDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;

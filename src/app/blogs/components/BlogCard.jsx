import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog, className = "" }) => {
  return (
    <div className={className}>
      <Link href={blog.href}>
        <div className="group flex flex-col sm:flex-row w-full rounded-[20px] overflow-hidden border border-[#1a3a6e] bg-[#0b1a3b] hover:border-[#2a5aae] transition-all duration-500 ease-in-out">
          {/* Image Section */}
          {blog.background && (
            <div className="relative w-full sm:w-[45%] min-h-[200px] sm:min-h-[280px] overflow-hidden shrink-0">
              <div
                className={`absolute inset-0 bg-center bg-cover ${blog.background} transition-transform duration-500 ease-in-out group-hover:scale-110`}
              />
            </div>
          )}

          {/* Content Section */}
          <div className="flex flex-col justify-between p-6 sm:p-8 w-full">
            <div>
              {blog.category && (
                <span className="text-[#36b8b0] text-sm font-semibold font-bwmss01 tracking-wide">
                  {blog.category}
                </span>
              )}
              <h3 className="text-white text-xl sm:text-2xl font-aeonik tracking-wide mt-2 mb-3 line-clamp-2">
                {blog.title}
              </h3>
              {blog.description && (
                <p className="text-[#9EB3CF] text-sm sm:text-base font-bwmss01 line-clamp-3">
                  {blog.description}
                </p>
              )}
            </div>

            {/* Author Section */}
            <div className="flex items-center gap-3 mt-5">
              {blog.authorImg && (
                <div className="border border-[#2a4a7a] rounded-full w-[44px] h-[44px] relative overflow-hidden shrink-0">
                  <Image
                    className="rounded-full object-cover"
                    src={blog.authorImg}
                    width="44"
                    height="44"
                    alt={blog.authorName}
                  />
                </div>
              )}
              <div>
                <p className="text-white text-sm font-semibold font-aeonik tracking-wide">
                  {blog.authorName}
                </p>
                <p className="text-[#9EB3CF] text-sm font-bwmss01">
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

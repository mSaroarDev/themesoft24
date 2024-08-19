import CategoryLink from "./CategoryLink";

export default function CategorySection() {
  return (
    <>
        <div className="col-span-12 md:col-span-4 lg:col-span-3 border border-borderColor rounded-lg w-full h-fit">
            <h2 className="uppercase font-semibold text-lg p-3 border-b border-borderColor">Categories</h2>

            <div className="flex flex-col items-start">
                <CategoryLink />
                <CategoryLink />
                <CategoryLink />
                <CategoryLink />
                <CategoryLink />
                <CategoryLink />
            </div>
        </div>
    </>
  );
}
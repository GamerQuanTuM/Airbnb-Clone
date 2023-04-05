"use client";
import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "../CategoryBox";
import Container from "../Container";

import { categories } from "../../constants/Categories";

function Categories() {
  const params = useSearchParams();
  const category = params?.get("category");

  const pathname = usePathname();

  const isMainPage = pathname === "/";
  if (!isMainPage) return null;

  

  return (
    <Container>
      <div className="pt-4 flex flex-row justify-between items-center overflow-x-auto">
        {categories.map((category) => (
          <CategoryBox key={category.label} category={category} />
        ))}
      </div>
    </Container>
  );
}

export default Categories;

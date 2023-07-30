// ArticleCard.js (Componente reutilizable para el artículo)

import React from "react";


const ArticleCard = ({ data }) => {
  const { title, imageSrc, totalAmount, minInvestment, maxInvestment } = data;

  return (
    <article className="group relative flex h-[16rem] sm:h-auto md:h-[24rem] lg:h-[32rem] w-full md:w-[50rem] lg:w-[60rem] rounded-2xl bg-[#3a4448]">
      {/* Resto del código del artículo con los datos dinámicos */}
    </article>
  );
};

export default ArticleCard;

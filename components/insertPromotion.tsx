function createPromoMarkdown(promo: any) {
  // Choose the class based on the promo type
  const promoClass = `custom-promo-class-${promo.type}`;
  let mediaContent = "";
  if (promo.type == 1) {
    mediaContent = `<img src=${promo.imageUrl} alt="Promotion" />`;
    return `
  <div className="${promoClass}">
  <div className=${promoClass}-content>
   ${mediaContent}
  <h2>${promo.description}</h2>
  </div>
  <a href="${promo.link}">${promo.cta}</a>
</div>

  `;
  } else {
    mediaContent = `<img src=${promo.imageUrl} alt="Promotion" />`;
    return `
  <div className="${promoClass}">
  ${mediaContent}
  <div className=${promoClass}-content>
  <h2>${promo.description}</h2>
  <a href="${promo.link}">${promo.cta}</a>
  </div>
 
</div>

  `;
  }
}

export function insertPromotions(markdownContent: string, promotions: any) {
  // Split the Markdown content into an array of lines
  const lines = markdownContent.split("\n");

  // Define where in the Markdown content you want to insert the promotions
  const promotionPoints = [5, 30, 60, 80]; // Lines after which promotions should be inserted

  // Insert each promotion Markdown into the main content
  promotionPoints.forEach((point, index) => {
    // Ensure we don't insert beyond the array length and we have a promotion defined
    if (point < lines.length && promotions[index]) {
      const promoMarkdown = createPromoMarkdown(promotions[index]);
      lines.splice(point, 0, promoMarkdown); // Insert the promotion Markdown
    }
  });

  return lines.join("\n"); // Rejoin the lines into a single string
}

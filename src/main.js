const Paragraphs = document.querySelectorAll(".section-paragaph");

document.addEventListener("scroll",function(){
    Paragraphs.forEach(Paragraph =>{
        Paragraph.classList.add("section_paragraph--visible")
    })
})

function isInView(element) {
  const rect = element.getBoundingClient();
  return (
    (rect.bottom > 0 && rect.top < window.innerHeight - 150) ||
    document.documentElement.clientHeight - 150
  );
}

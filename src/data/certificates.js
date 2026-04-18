// Cloudinary auto-optimization helper
function cloudinaryOpt(url, width) {
  if (!url || !url.includes('res.cloudinary.com')) return url;
  const transform = width ? `f_auto,q_auto,w_${width}` : 'f_auto,q_auto';
  return url.replace('/upload/', `/upload/${transform}/`);
}

export const certificates = [
  {
    id: 1,
    title: "Introduction to C",
    issuer: "Sololearn",
    description: "Successfully completed the course by demonstrating a theoretical and practical understanding of Introduction to C.",
    image: cloudinaryOpt("https://res.cloudinary.com/dxe4mpopf/image/upload/v1776399730/c_certificate_v2k7kz.png", 500), 
    date: "05 February, 2026",
    credentialId: "CC-4J0MZUKN"
  },
  {
    id: 2,
    title: "Introduction to JavaScript",
    issuer: "Sololearn",
    description: "Successfully completed the course by demonstrating a theoretical and practical understanding of Introduction to JavaScript.",
    image: cloudinaryOpt("https://res.cloudinary.com/dxe4mpopf/image/upload/v1776399730/js_certificate_v2jekl.jpg", 500),
    date: "26 March, 2026",
    credentialId: "CC-F3MUV8DU"
  },
  {
    id: 3,
    title: "ArtPark CodeForge Hackathon",
    issuer: "Indian Institute of Science (IISc), Bangalore & Unstop",
    description: "Certificate of Participation as Team Qubit Coderz in the Build & Submit - Prototype Development Round of ArtPark CodeForge Hackathon.",
    image: cloudinaryOpt("https://res.cloudinary.com/dxe4mpopf/image/upload/v1775551068/hackathon_certificate_kyndys.jpg", 500),
    date: "Participation Certificate", 
    credentialId: ""
  }
];

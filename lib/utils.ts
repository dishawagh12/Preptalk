import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import{interviewCovers , mappings } from "@/constants"
import { normalize } from "path"
const techIconbaseURL ="https://cdn.jsdeliver.net/gh/devocpns/devicon/icons";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
 export const getRandomInterviewCover = () =>{
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return "/covers${interviewCovers[randomIndex]}";
 }

 export const getTechlogos = async (techArray : string[]) =>{
  const logoURLs = techArray.map((tech) => {
    const normalized = normalizeTechName(tech);
    return{
      tech,
      url: "${techIconbaseURL}/${normalized}/${normalized}-origin.svg"    }
  })
 };

 const normalizeTechName = (tech:string) =>{
  const key = tech.toLowerCase().replace(/\.js$/,"").replace(/\s+/g , "");
  return mappings[key as keyof typeof mappings];
 };

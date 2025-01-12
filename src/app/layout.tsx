import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_DESCRIPTION = "Olá! Sou João Victor, um desenvolvedor Fullstack apaixonado por tecnologia, com habilidades sólidas em JavaScript, React e Next.js. Tenho experiência em criar produtos digitais inovadores, desde a concepção até a implementação, utilizando práticas modernas de desenvolvimento e ferramentas como AWS EC2, Lambda e SNS. Sou apaixonado por resolver problemas complexos e otimizar o desempenho de aplicações, utilizando técnicas como cacheamento e otimização de consultas. Além disso, tenho um forte compromisso com a qualidade do código e a usabilidade do produto final. Estou constantemente buscando aprender e me atualizar nas mais recentes tecnologias e melhores práticas da indústria. Com uma mentalidade voltada para o crescimento e uma paixão pela inovação, estou sempre pronto para enfrentar novos desafios e contribuir de forma significativa para projetos desafiadores."
const keywords = [
	"Git",
	"GitHub",
	"CI/CD",
	"HTML",
	"CSS",
	"C#",
	"Javascript",
	"Typescript",
	"React",
	"NextJs",
	"AstroJS",
	"Docker",
	"AWS",
	"Firebase",
	"EC2",
	"Lambda",
	"CloudWatch",
	"RabbitMQ",
	"Redis",
	"PostgreSQL",
	"MySQL",
	"Figma",
  "Google Analytics",
  "Jenkins",
  "Azure",
  "OpenLens"
]
export const metadata: Metadata = {
  title: "João Victor - Desenvolvedor Fullstack",
  description: SITE_DESCRIPTION,
  keywords
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

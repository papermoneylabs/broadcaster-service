import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface PapermoneyWelcomeEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const PapermoneyWelcomeEmail = ({
  username,
  invitedByUsername,
  teamName,
  inviteLink,
}: PapermoneyWelcomeEmailProps) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/static/papermoney-simbolo.png`}
                width="100"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Bem-vindo <strong>{teamName}</strong> on <strong>Vercel</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Olá <strong>{username}</strong>, você foi convidado para participar do objetivo coletivo <strong>{teamName}</strong> de{" "}
              <strong>Bruno Albuquerque</strong>.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#F85B24] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={inviteLink}
              >
                Acessar workspace
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

PapermoneyWelcomeEmail.PreviewProps = {
  username: "Waldrey",
  invitedByUsername: "Waldrey",
  invitedByEmail: "waldrey.silva@papermoney.com.br",
  teamName: "Trip to Malta",
} as PapermoneyWelcomeEmailProps;

export default PapermoneyWelcomeEmail;

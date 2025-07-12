import { Box, Container, Divider, Link, Stack, useTheme } from "@mui/material";
import {
  YoutubeLogo,
  TwitchLogo,
  DiscordLogo,
  EnvelopeSimple,
  GithubLogo
} from "phosphor-react";
import './App.css'


function NoiseOverlay() {
  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/binding-dark.png')",
        opacity: 0.4,
        zIndex: 0,
      }}
    />
  );
}

function App() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(45deg, #FF79C6, #BD93F9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NoiseOverlay />
      <Container
        maxWidth="xs"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderRadius: 4,
          boxShadow: 3,
          pt: 2,
          px: 4,
          pb: 2,
          textAlign: "center",
          backdropFilter: "blur(10px)",
          backgroundImage: "url('https://www.transparenttextures.com/patterns/squairy.png')",
          backgroundSize: "300px",
          backgroundRepeat: "repeat",
        }}
      >
        <Stack spacing={3} divider={<Divider variant="middle" flexItem />}>
          {/* YouTube */}
          <Link
            href="https://youtube.com/@nathanbaggs"
            target="_blank"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              fontWeight: 600,
              fontSize: "1.5rem",
              color: theme.palette.text.primary,
              "&:hover": {
                color: "#FF0000",
              },
            }}
          >
            <Box sx={{ width: 32, display: "flex", justifyContent: "center" }}>
              <YoutubeLogo size={28} weight="fill" />
            </Box>
            <Box component="span">YouTube</Box>
          </Link>

          {/* Twitch */}
          <Link
            href="https://www.twitch.tv/nathan_baggs"
            target="_blank"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              fontWeight: 600,
              fontSize: "1.5rem",
              color: theme.palette.text.primary,
              "&:hover": {
                color: "#9146FF",
              },
            }}
          >
            <Box sx={{ width: 32, display: "flex", justifyContent: "center" }}>
              <TwitchLogo size={28} weight="fill" />
            </Box>
            <Box component="span">Twitch</Box>
          </Link>

          {/* Discord */}
          <Link
            href="https://discord.gg/9FkkMgXSUV"
            target="_blank"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              fontWeight: 600,
              fontSize: "1.5rem",
              color: theme.palette.text.primary,
              "&:hover": {
                color: "#5865F2",
              },
            }}
          >
            <Box sx={{ width: 32, display: "flex", justifyContent: "center" }}>
              <DiscordLogo size={28} weight="fill" />
            </Box>
            <Box component="span">Discord</Box>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/nathan-baggs"
            target="_blank"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              fontWeight: 600,
              fontSize: "1.5rem",
              color: theme.palette.text.primary,
              "&:hover": {
                color: "#999",
              },
            }}
          >
            <Box sx={{ width: 32, display: "flex", justifyContent: "center" }}>
              <GithubLogo size={28} weight="fill" />
            </Box>
            <Box component="span">GitHub</Box>
          </Link>

          {/* Email */}
          <Link
            href="mailto:hello@nathanbaggs.co.uk"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              fontWeight: 600,
              fontSize: "1.5rem",
              color: theme.palette.text.primary,
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            <Box sx={{ width: 32, display: "flex", justifyContent: "center" }}>
              <EnvelopeSimple size={28} weight="fill" />
            </Box>
            <Box component="span">Email</Box>
          </Link>
        </Stack>

      </Container>
    </Box>
  );
}

export default App;

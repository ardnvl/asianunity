export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10 text-center text-sm text-zinc-400">
      <p>© 2026 [ASU] AsianUnity</p>

      <p className="mt-2">
        Powered by{" "}
        <a
          href="https://woscontrol.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          woscontrol.com
        </a>
      </p>

      <p className="mt-3">
        [ASU] AsianUnity is not affiliated with Century Games.
      </p>
    </footer>
  );
}
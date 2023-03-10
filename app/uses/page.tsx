import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description: "Tech I'm currently using.",
};

export default function Uses() {
  return (
    <div className="h-screen pt-36 mx-6 md:mx-24 xl:mx-80">
      <h1 className="font-bold text-3xl mb-8">Uses</h1>
      <p className="mt-2 mb-8">{`List of tech I'm currently using.`}</p>
      <div className="flex flex-col gap-12">
        <div>
          <h3 className="font-semibold">Computer</h3>
          <ul>
            <li>13&quot; Macbook Pro, M1 (2020)</li>
            <li>Kinesis Advantage2 Keyboard</li>
            <li>Vassink Ergonomic Mouse</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Coding</h3>
          <ul>
            <li>Editor: VSCode + VSCodeVim + GitHub Copilot</li>
            <li>Terminal: iTerm2</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Software</h3>
          <ul>
            <li>1Password</li>
            <li>Loom</li>
            <li>Excalidraw</li>
            <li>Vimium Chrome Extension</li>
            <li>META SEO inspector Chrome Extension</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

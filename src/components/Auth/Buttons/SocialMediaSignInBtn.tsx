type Props = {
  icon: string;
  alt?: string;
  text: string;
};

export default function SocialMediaSignInBtn({ icon, alt, text }: Props) {
  return (
    <button className="w-full bg-[#333333] px-4 py-[10px] rounded-md flex items-center justify-center gap-2 font-normal text-[12px] text-white">
      <img src={icon} alt={alt || "logo"} />
      Or sign in with {text}
    </button>
  );
}

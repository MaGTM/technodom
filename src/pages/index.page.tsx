import { Auth } from '@features/auth'

export const HomePage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-200">
      <div className="rounded-[1rem] bg-white p-[0.8rem]">
        <Auth />
      </div>
      <p className="mt-[1.2rem] text-black-40">CORRECT_NUMBER=7 705 964 84 85</p>
    </div>
  )
}

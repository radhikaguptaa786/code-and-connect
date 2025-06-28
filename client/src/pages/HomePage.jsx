import illustration from "@/assets/illustration.svg"
import front_img from "@/assets/front_img.png"
import FormComponent from "@/components/forms/FormComponent"
// import Footer from "@/components/common/Footer";

function HomePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-16 bg-gradient-to-b from-[#1e293b] to-[#0f172a]
">
            <div className="my-12 flex h-full min-w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0">
                <div className="flex w-full items-center justify-center sm:w-1/2">
                    <FormComponent />
                </div>
                <div className="flex w-full animate-up-down justify-center sm:w-1/2 sm:pl-4">
                    <img
                        src={front_img}
                        alt="code and connect Illustration"
                        className="mx-auto w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2"

                    />
                </div>
                
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default HomePage

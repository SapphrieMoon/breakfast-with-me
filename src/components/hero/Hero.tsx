import { ComicText } from "../ui/comic-text";
import { MorphingText } from "../ui/morphing-text";
import { SparklesText } from "../ui/sparkles-text";


export function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center bg-background px-4 py-12">
            <div className="text-center space-y-8 max-w-3xl mx-auto">

                {/* Title */}
                <div className="mb-4">
                    <ComicText fontSize={4}>
                        Ăn sáng cùng tôi
                    </ComicText>
                </div>

                {/* Brand */}
                <div className="flex justify-center">
                    <SparklesText className="text-xl sm:text-2xl md:text-5xl mt-10 font-medium">
                        SapphireMoon
                    </SparklesText>
                </div>

                {/* Subtitle - Morphing Text */}
                <div className="pt-6">
                    <MorphingText
                        texts={[
                            'Ăn sáng cùng nhau ☕',
                            'Khám phá những món ăn yêu thích 🥐',
                            'Bắt đầu ngày mới tuyệt vời 🌅',
                        ]}
                        className="text-sm sm:text-xl md:text-2xl text-amber-800/80 dark:text-amber-200/80 "
                    />
                </div>

            </div>
        </section>
    )
}

import  LeadershipSection  from "@/components/sections/AboutLeaders";
import AboutStory from "@/components/sections/AboutStory";
import AboutHero from "@/components/sections/AboutHero";
import AboutCallToAction from "@/components/sections/AboutCallToAction";
export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutStory />
            <LeadershipSection />
            <AboutCallToAction />
        </>
    );
}

export default function SectionTitle({heading,subheading}){
    return(
        <div className="md:w-4/12 w-full mx-auto text-center my-10">
            <p className="text-yellow-500 mb-4">--- {subheading} ---</p>
            <h3 className="text-4xl uppercase py-3 font-bold border-y-4">{heading}</h3>
        </div>
    )
}
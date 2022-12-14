import clsx from "clsx"

export default function HomePage() {
  return (
    <div className={"space-y-8 divide-y-2 divide-x-gray-300"}>
      <SimpleContainer />
      <SimpleContainerUsedInGrid />
      <MoreComplexComponent />
      <div className={"w-[25rem]"}>
        <MoreComplexComponent />
      </div>
    </div>
  )
}

function SimpleContainer(props: {}) {
  return (
    <div className={"@container"}>
      <div
        className={
          "bg-green-100 @sm:bg-green-200 @md:bg-green-300 @lg:bg-green-500 @lg:text-white @xl:bg-green-700 @2xl:bg-green-800 @3xl:bg-green-900 w-full p-4 transition-all duration-400"
        }
      >
        Transition happens at the container's size instead of viewport
      </div>
    </div>
  )
}

function SimpleContainerUsedInGrid(props: {}) {
  // children:children:anything <-- used here to get over the div in div of the simple container component
  return (
    <div className={"grid p-4 gap-2 grid-cols-[repeat(auto-fit,minmax(400px,1fr))] children:children:rounded-xl"}>
      <SimpleContainer />
      <SimpleContainer />
      <SimpleContainer />
      <SimpleContainer />
      <SimpleContainer />
      <SimpleContainer />
      <SimpleContainer />
      <SimpleContainer />
      <SimpleContainer />
    </div>
  )
}

function MoreComplexComponent(props: {}) {
  return (
    <div className={"@container"}>
      <div
        className={clsx("transition-all duration-700", "more-complex-component-grid-template", "p-4", "bg-gray-200")}
      >
        <h2 className={clsx("[grid-area:header]", "text-[clamp(2rem,5cqw,4rem)]")}>Name of the component</h2>
        <p className={clsx("[grid-area:text]", "columns-1 p-2", "@md:columns-2 @md:p-4", "@lg:columns-3 @sm:p-8")}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus dicta, ea enim ipsa iusto modi
          officiis provident rem voluptatibus! A accusamus eaque error inventore officiis perspiciatis possimus quasi
          repudiandae. Animi aut consequatur cumque dignissimos dolore eum explicabo ipsa libero maiores, numquam
          repellat rerum sit totam ullam unde veritatis voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Assumenda delectus dicta, ea enim ipsa iusto modi officiis provident rem voluptatibus! A accusamus eaque
          error inventore officiis perspiciatis possimus quasi repudiandae. Animi aut consequatur cumque dignissimos
          dolore eum explicabo ipsa libero maiores, numquam repellat rerum sit totam ullam unde veritatis voluptate!
        </p>
        <div className={clsx("[grid-area:image]", "flex justify-center p-4")}>
          <div className={clsx("aspect-video bg-gray-600", "w-full h-fit")} />
        </div>
        <div className={clsx("[grid-area:buttons]", "flex gap-2", "@sm:items-end @sm:justify-end")}>
          <button className={"bg-green-700 w-full px-4 py-2 rounded text-white font-bold"}>Accept</button>
          <button className={"bg-green-500 w-full px-4 py-2 rounded font-semibold"}>Decline</button>
        </div>
      </div>
    </div>
  )
}

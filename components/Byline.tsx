type BylineProps = {
  author: string
}

export default function Byline({ author }: BylineProps) {
  return (
    <>
      <div className="byline">By {author}</div>
      <style jsx>{`
        .byline {
          color: purple;
          font-weight: bolder;
        }
      `}</style>
    </>
  )
}

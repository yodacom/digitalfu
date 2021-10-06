// import CourseList from 'components/courseList'
import { getCourses } from '../utils/db'

const Index = ({courses}) => {
return (
  <div>
    <h1> Courses </h1>
    <pre>
      {
        JSON.stringify(courses, null, 2)
      }
    </pre>
  </div>
  )
}
// component declaration
export const getStaticProps = async () => {
  const data = await getCourses();

  return {
    props: {
      courses: JSON.parse(JSON.stringify(data)),
    },
  }
}

export default Index;
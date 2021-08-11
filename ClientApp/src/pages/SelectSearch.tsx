import * as React from 'react'
import Navbar from '../components/Navbar/Navbar'
import {useParams} from 'react-router-dom'

interface Paths{
    path:string,
    secondpath:string,
    thirdpath:string
  }
function SelectSearch() {
    let paths=useParams<Paths>()
    return (
        <div>
            {paths.path}
            {paths.secondpath}
            {paths.thirdpath}
        </div>
    )
}

export default SelectSearch

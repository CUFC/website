import React from "react"
import styled from "styled-components"

const CommitteeCard = ({ name, role, email }) => {
    return (
        <p>{name}, {role}, <a href={'mailto:'+email}>{email}</a></p>
    )
}

export default CommitteeCard

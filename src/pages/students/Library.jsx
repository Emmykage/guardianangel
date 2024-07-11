import React from 'react'
import { Content, LibraryContainer, LibraryHeader, SidebarContainer } from '../../styles/LibraryStyles'
import Sidebar from './Sidebar'

const LibrarySection = () => {
  return (
    <LibraryContainer>
      <SidebarContainer>
        <Sidebar/>
      </SidebarContainer>
      <Content>
        <LibraryHeader>Library</LibraryHeader>
      </Content>
    </LibraryContainer>
  )
}

export default LibrarySection
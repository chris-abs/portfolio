import useProjectModal from '@/hooks/useProjectModal'
import { useCallback, useState } from 'react'
import Modal from './Modal'
import Carousel from '../Carousel'

interface ProjectModalProps {}

const ProjectModal: React.FC<ProjectModalProps> = () => {
  const projectModal = useProjectModal()
  const onSubmit = () => {
    projectModal.onClose()
  }

  const slides = [{ url: '/images/avatar.jpeg', title: 'avatar' }]

  const bodyContent = (
    <div className="border-b border-gray-200 py-8">
      <div className="flex justify-center ">image carousel</div>
    </div>
  )

  return (
    <Modal
      isOpen={projectModal.isOpen}
      onClose={projectModal.onClose}
      onSubmit={onSubmit}
      title="project"
      label="visit project"
      body={bodyContent}
    />
  )
}

export default ProjectModal

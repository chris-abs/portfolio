import useProjectModal from '@/hooks/useProjectModal'
import { useCallback, useState } from 'react'
import Modal from './Modal'

interface ProjectModalProps {}

const ProjectModal: React.FC<ProjectModalProps> = () => {
  const projectModal = useProjectModal()
  const onSubmit = () => {
    projectModal.onClose()
  }

  return (
    <Modal
      isOpen={projectModal.isOpen}
      onClose={projectModal.onClose}
      onSubmit={onSubmit}
      title="project"
      label="visit project"
    />
  )
}

export default ProjectModal

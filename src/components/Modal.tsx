const Modal = () => {
  return(
    <div id="default-modal" tabindex="-1" aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-grey-900">
        <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg p-4 shadow-sm">
              {/* Isi konten */}
              test
            </div>
        </div>
    </div>

  )
}

export default Modal
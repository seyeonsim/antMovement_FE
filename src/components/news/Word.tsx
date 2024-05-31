import { deleteWord } from '../../services/apiService';

const Word = ({ wordData }: any) => {
  // console.log(wordData);

  const handleDelete = async (objId: any) => {
    console.log(objId);
    const response = await deleteWord({ objId });
    // console.log(response.success);
    if (response.success) {
      alert('단어가 삭제되었습니다.');
      window.location.href = '/wordBook';
    }
  };
  return (
    <>
      {wordData.map((words: any) => (
        <div className="word-wrapper" key={words.no}>
          <div className="word-description">
            <div className="word-title">{words.title}</div>
            {words.content}
          </div>
          <div
            className="word-delete-btn"
            onClick={() => handleDelete(words._id)}
          >
            <span className="material-symbols-rounded">delete</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Word;

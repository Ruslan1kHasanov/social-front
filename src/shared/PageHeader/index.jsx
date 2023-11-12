import './index.scss';

const PageHeader = ({ title, actionSlot }) => {
  return (
    <div className={'page_header'}>
      <h2 className={'page_header__title'}>{title}</h2>
      <div className="page_header__action_slot">{actionSlot}</div>
    </div>
  );
};

export default PageHeader;

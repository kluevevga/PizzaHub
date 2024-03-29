import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock: React.FC = () => {
   return (
      <>
         <h1 className={styles.title}>
            <span>😕</span>
            <br />
            Ничего не найдено
         </h1>
         <p className={styles.paragrph}>К сожалению данная страинца отсутствует в нашем интернет магазине</p>
      </>
   )
}

import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonItem, IonLabel, IonList, IonPage, IonThumbnail } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { products } from './data'

interface IProduct{
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  inStock: boolean;
  rating: number;
}

const ReactLearning:React.FC = () => {

  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);

  useEffect(()=>{
    console.log("all SelectedProducts", selectedProducts);
  },[selectedProducts] )
  

const handleSelectProduct = (product:IProduct) =>{
  // console.log("selected product",product);
  setSelectedProducts((prevProduct)=>[...prevProduct, product]);
};


const handleRemoveProduct= (product: IProduct)=>{
  const newProducts= selectedProducts.filter((productItem)=>{
    return productItem.id != product.id;
  }
)

  setSelectedProducts(newProducts);

}




  return (
   <IonPage>
      <IonContent>
        <div style = {{display:"flex", flexWrap: "wrap"}}>
          <IonCard>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
      {products.map((product, productIndex)=>{
        return(
          <div key={productIndex}>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" 
              src={product.image}
               />
            </IonThumbnail>


            <div>
            <IonLabel >{product.name}</IonLabel>
            <div>{product.description}</div>
            <br/>
            <IonButton onClick={()=>{handleSelectProduct(product)}}>
              Select
            </IonButton>
            </div>
          
          </IonItem>
          </IonList>
          </div>
            );
      })}
        
          </IonCardContent>
          </IonCard>
           <IonCard>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
      {selectedProducts.map((product, productIndex)=>{
        return(
          <div key={productIndex}>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" 
              src={product.image}
               />
            </IonThumbnail>


            <div>
            <IonLabel >{product.name}</IonLabel>
            <div>{product.description}</div>
            <br/>
            <IonButton onClick={()=>{handleRemoveProduct(product)}}>
              remove
            </IonButton>
            </div>
          
          </IonItem>
          </IonList>
          </div>
            );
      })}
        
          </IonCardContent>
          </IonCard>
        </div>
          </IonContent>
            </IonPage>
        );
      };
      

   

export default ReactLearning


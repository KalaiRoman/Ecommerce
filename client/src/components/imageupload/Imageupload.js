import React, { useEffect, useState } from 'react'
import instanceBaseurl from '../../config/Baseurl';
import { toast } from 'react-hot-toast';
import Cookies from 'js-cookie';

function Imageupload() {

    const [url, setUrl] = useState(null);

    const [all, setAllimages] = useState([]);

    const imageConvert = async (file) => {
        try {
            const fileUplaod = new FileReader();
            await fileUplaod.readAsDataURL(file);
            const data = new Promise((resolve, reject) => {
                fileUplaod.onload = () => resolve(fileUplaod.result);
            })
            return data;
        } catch (error) {
        }
    }

    const handleChange = async (e) => {
        const im = e.target.files[0];
        const convert = await imageConvert(im);
        setUrl(convert);
    }

    const uploadImage = () => {
        const userid = Cookies.get("userid");
        if (url) {
            const data = {
                image: url,
                userid: userid
            }
            instanceBaseurl.post("/image/create", data).then((res) => {
                toast.success("success")
            }).catch((err) => {
                console.log(err);
            })
        }
    }


    const getAllimages = async () => {
        try {
            const userid = Cookies.get("userid");

            const response = await instanceBaseurl.post('/image/get', { userid: userid });
            if (response) {
                setAllimages(response?.data?.data);
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        getAllimages();
    }, [])
    return (
        <div>
            {url ? <>

                <img src={url} alt="no image"
                    style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "20px"
                    }}
                />
            </> : <>
                <input type="file" accept='*' onChange={handleChange} />

            </>}
            {url ? <>
                <button onClick={uploadImage}>uploadImage</button>
            </> : null}

            <div>
                {all?.map((item, index) => {
                    return (
                        <div className='mt-3 mb-3 ms-4' key={index}>
                            <img src={item?.image} alt="no image"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "10px"
                                }}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Imageupload

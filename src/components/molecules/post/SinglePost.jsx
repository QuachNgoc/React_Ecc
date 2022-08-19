import React from "react";
import { useSelector } from "react-redux";
import { useCopyToClipboard } from "../../../hooks/useCopyToClipBoard";
import Button from "../../atoms/button/Button";
import TextAuthor from "../../atoms/textAuthor/TextAuthor";
import "./SinglePost.scss";

const SinglePost = ({
  topic,
  data: { id, img, author_id, time, title, overview },
}) => {
  const authors = useSelector((state) => state.member.data);
  const author = authors.find((item) => item.id === author_id);
  const [copied, copy] = useCopyToClipboard(window.location.href);
  const handleShare = () => {
    copy();
    console.log(copied);
    alert("Copied to clipboard!");
  };
  return (
    <div className="flex flex-col flex-1 w-full pb-60px">
      <p className="mb-4 capitalize topic-name font-title">{topic}</p>
      <h2 className="font-title text-[30px] leading-normal mb-9">{title}</h2>
      <div className="flex justify-between mb-4">
        <TextAuthor
          pic={author?.profile_pic}
          name={author?.name}
          time_post={time}
        ></TextAuthor>
        <div className="flex gap-x-4">
          <Button
            className="bg-[#F3F3F3] px-[20px] py-[16px] rounded-[10px]"
            onClick={handleShare}
          >
            <div className="flex gap-x-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.66631 4.60945V1.72412L11.8043 4.86212L14.3203 7.37812L11.7596 9.51212L8.66631 12.0901V9.26679C3.23565 8.85745 1.33298 12.0001 1.33298 12.0001C1.33298 10.0421 1.49431 8.01012 3.03365 6.47145C4.82298 4.68145 7.41431 4.55479 8.66631 4.60945Z"
                  fill="#2C2B2B"
                />
              </svg>
              <p className="text-[#2C2B2B]">Share</p>
            </div>
          </Button>
          <Button className="btn-primary px-[20px] py-[16px] rounded-[10px]">
            <div className="flex gap-x-1">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5725 8.33917C15.8678 7.9923 16.0312 7.5673 16.0312 7.12511C16.0312 6.42355 15.59 5.75948 14.8799 5.38917C14.6971 5.29385 14.4889 5.24368 14.277 5.24386H10.0617L10.1672 3.32355C10.1918 2.85948 10.0072 2.41886 9.64863 2.08292C9.47265 1.91734 9.26034 1.7856 9.02481 1.69584C8.78929 1.60607 8.53556 1.5602 8.2793 1.56105C7.36523 1.56105 6.55664 2.10792 6.31406 2.89073L4.8041 7.75011H4.79883V14.4376H13.101C13.2627 14.4376 13.4209 14.4095 13.5668 14.3532C14.4035 14.036 14.9432 13.3095 14.9432 12.5032C14.9432 12.3064 14.9115 12.1126 14.8482 11.9251C15.1436 11.5782 15.307 11.1532 15.307 10.711C15.307 10.5142 15.2754 10.3204 15.2121 10.1329C15.5074 9.78605 15.6709 9.36105 15.6709 8.91886C15.6674 8.72198 15.6357 8.52667 15.5725 8.33917ZM1.96875 8.25011V13.9376C1.96875 14.2142 2.22012 14.4376 2.53125 14.4376H3.67383V7.75011H2.53125C2.22012 7.75011 1.96875 7.97355 1.96875 8.25011Z"
                  fill="white"
                />
              </svg>
              <p>Like</p>
            </div>
          </Button>
        </div>
      </div>
      <div className="text leading-relaxed text-[#616161] text-justify">
        <p className="mb-5 desc">
          <span className="font-semibold">Nội dung chính </span>
          {overview}
        </p>
        <img src={img} alt="" className="mb-5" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non,
          doloremque cum dolore excepturi voluptatum a eum? Voluptatum excepturi
          reprehenderit numquam veritatis debitis praesentium ipsam, harum sed
          suscipit dolor, nihil laboriosam. Cum reiciendis sunt vero animi nemo,
          tempore eveniet, totam aliquam molestias qui nobis sequi, natus
          facilis odit maxime enim necessitatibus recusandae vel id odio vitae
          perferendis! Voluptatibus adipisci, eveniet quas laboriosam harum
          dolores consequatur eaque illum odio laborum voluptate quaerat, enim
          deserunt? Amet laudantium similique odit magni sapiente blanditiis
          modi quam voluptatibus quas possimus temporibus quisquam eum, ab
          aspernatur eaque consequatur dolor, eius mollitia ipsum labore
          numquam.<br></br> Nihil adipisci perferendis at doloremque possimus
          dolorem laborum autem consequatur dolore distinctio, facere vel?
          Mollitia provident obcaecati sit! Voluptatem inventore odio quas,
          culpa nemo beatae odit, neque adipisci fugiat deserunt ducimus
          laboriosam, ea doloremque! Exercitationem cum eaque tenetur veritatis
          sunt suscipit quae, ducimus quod sequi quasi asperiores adipisci
          dolores molestias libero! Enim pariatur fugit dolorem quibusdam hic
          sit natus itaque, eaque neque amet, consequatur voluptate temporibus
          nobis? Rem ad accusantium voluptatum aperiam excepturi reprehenderit
          non mollitia dignissimos dicta odit iste, necessitatibus provident
          suscipit nisi, in, earum molestiae nobis odio esse reiciendis impedit
          possimus unde porro. Id necessitatibus atque quos minima maxime ipsum
          eos consequatur culpa.<br></br> Vel ad nostrum eaque veritatis quaerat
          ipsum, unde hic assumenda labore dolores eligendi laborum nemo
          deleniti fugit repudiandae architecto libero, minima quis soluta,
          saepe dignissimos magnam asperiores enim qui. Enim cum quam tempore
          adipisci nobis explicabo sequi dolore minus consectetur. Quaerat ea
          soluta laborum modi vero facilis! Eligendi enim nulla consequuntur
          illo odio illum, placeat impedit in nisi alias velit atque et ducimus
          corrupti voluptate autem, commodi iste natus laborum nam sint! Eos
          vero distinctio ullam repudiandae a nihil nesciunt quos! Est sint
          error aliquam vitae, eligendi maxime optio ea repellat fugit suscipit
          quia dolorum quaerat quos rem quo consectetur? Ut animi placeat
          accusamus vel, esse reiciendis officia officiis optio ratione, magni
          eius explicabo culpa quod sapiente reprehenderit illum maxime magnam
          possimus porro voluptatibus. Consequuntur nulla culpa animi hic,
          voluptatum et commodi id harum laudantium quo autem voluptas libero
          maxime labore dignissimos quidem eum, doloribus fuga corporis beatae
          aspernatur! Perferendis distinctio ullam tempora nisi quae ipsam vel,
          numquam praesentium vitae nostrum iste voluptas quibusdam molestias
          totam id beatae fuga quod quaerat aut deleniti quam. Quisquam error,
          voluptatibus, assumenda impedit corporis consequuntur iure dignissimos
          deserunt inventore doloribus accusantium provident, qui officia
          voluptatem quis fuga vero tempore enim. Alias odit veniam maiores,
          commodi delectus quod! Odit earum voluptates similique accusantium
          incidunt dolorem, non temporibus repellat delectus iste a, dolorum
          sint? Assumenda ratione nobis delectus molestiae tempora dignissimos
          fugiat esse. <br></br> Commodi reiciendis eligendi sunt dolorum vel
          maiores tempora exercitationem mollitia saepe, debitis nulla, optio
          accusamus nihil dolores soluta quo doloremque quidem. Aut beatae
          dignissimos totam accusamus iusto quis similique eaque velit corrupti?
          Amet quam accusantium nesciunt vitae dolor, neque odit dignissimos
          ipsam culpa alias. Earum, possimus ea! Commodi soluta id in molestiae,
          at iure! Eligendi maiores temporibus accusamus aliquid saepe.
          Recusandae officiis vel quasi similique tenetur, non facilis ipsum
          harum voluptates laboriosam officia vitae, cum, aliquid illum. Illum
          nam magnam voluptates odio? Vero neque eum officiis explicabo
          repudiandae ut quam, enim maiores cumque totam, alias dolor doloremque
          vel obcaecati. Ipsum quos blanditiis officia eius repudiandae iure
          dicta voluptates eaque veritatis sed tempore, ipsam tenetur dolor ea
          necessitatibus! Possimus sit hic tempore mollitia ipsam sed rem fuga,
          voluptate odit fugit architecto, porro quae incidunt. Voluptatem,
          iusto? Quaerat facilis minima veritatis, veniam voluptates sequi
          reprehenderit velit esse eveniet rerum. <br></br>Animi recusandae
          neque eum voluptas consequuntur error, cum dicta, temporibus tenetur
          molestias quo iure est vitae tempora nihil nam maiores cumque
          pariatur. Voluptatem pariatur modi earum placeat consectetur esse
          fugit. Iusto animi delectus vel aspernatur corporis? Molestiae ut
          voluptates alias tempore error, explicabo, est dignissimos at a fugiat
          vero quisquam magni architecto fugit perferendis, ducimus nemo impedit
          eum nisi eveniet? Praesentium, debitis quae magni adipisci
          reprehenderit eveniet corporis consectetur veritatis. Doloribus
          praesentium molestiae fugiat similique sequi rem impedit nobis
          aspernatur quibusdam consectetur sapiente quia ipsa pariatur dolore
          amet quas officiis in consequuntur, minima facilis! Rerum saepe
          similique nisi nulla unde! Quaerat commodi sunt quia quidem a nulla
          expedita dolores eligendi eveniet impedit reiciendis est explicabo
          iusto, perspiciatis rerum accusamus praesentium suscipit temporibus
          ut, eaque eius. Perferendis, repellendus. Corporis pariatur deserunt
          in neque assumenda incidunt. Neque quidem, molestias eos rem officia
          consequatur facilis similique fuga earum reiciendis explicabo ducimus?
          Quos officiis cumque aspernatur, a necessitatibus beatae laboriosam
          eligendi animi. <br></br>Commodi, modi nihil aspernatur magni ullam
          sunt deserunt esse vitae accusamus corrupti beatae! Itaque numquam
          voluptatibus soluta harum sint iusto, quia, esse commodi assumenda
          nemo quod suscipit saepe, nobis possimus incidunt quam recusandae.
          Officia, dicta rem. Deserunt quas alias veniam! Rem, debitis quo.
          Soluta voluptatem deleniti distinctio dolore veniam ex, est eaque
          neque voluptas, deserunt error et cumque quasi! Non est beatae
          delectus doloremque culpa totam pariatur, fugit at error laboriosam
          quia eligendi impedit minus! Esse beatae labore animi deleniti
          numquam! Doloremque ratione esse provident accusantium inventore at
          odit obcaecati similique iste aperiam possimus dolores sunt adipisci,
          illo libero velit eveniet tempora quis, suscipit animi. Unde assumenda
          dolorum velit repudiandae saepe, nam qui perspiciatis magni autem
          soluta nostrum officiis dolores praesentium ducimus id facere adipisci
          minima amet? Mollitia iste facere tempora, est, praesentium eius error
          laborum dolorem magni possimus saepe repellat dolore nemo dolorum,
          quos impedit obcaecati inventore odio ullam fugiat atque alias
          excepturi et. <br></br>Est perferendis exercitationem nemo porro
          expedita fugit numquam. Laborum maxime saepe nemo ad, vitae, ab dicta
          obcaecati voluptatibus quam voluptatem, voluptate velit eos recusandae
          tempore error esse facilis distinctio architecto. Repudiandae esse
          suscipit ipsa quisquam odio asperiores eos iure dolore doloribus
          voluptas beatae temporibus fuga reiciendis neque, voluptatem tempore
          ad quam est quis numquam molestias quibusdam nesciunt? Quos
          accusantium dolores itaque quas aut soluta autem corporis porro
          accusamus maiores praesentium nulla id amet ea, quasi voluptatibus
          laudantium sed vitae ipsum quaerat deleniti atque laborum alias
          impedit! <br></br>Nulla placeat voluptatem, quos eos consectetur quam
          nisi dolore accusantium voluptate facere saepe ea cupiditate
          praesentium odit id atque est non voluptas omnis. Earum?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;

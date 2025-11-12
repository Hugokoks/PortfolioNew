import SectionPointer from "../SectionPointer/SectionPointer";
import styles from "./index.module.css";
import useDeviceType from "../../hooks/useDeviceType";
import { useMutation } from "@tanstack/react-query";
import postMessage from "./api";

export default function Contant() {
  const { isDesktop } = useDeviceType();
  const pointerMarginTop = isDesktop ? "mt-60" : "mt-40";

  const { mutate, isPending, error, isError } = useMutation({
    mutationFn: postMessage,
    onSuccess: (data) => {
      console.log("✅ Server response:", data);
      alert("Message sent successfully!");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    mutate(payload);
  };

  console.log(isPending, error, isError);
  return (
    <section id="contact" className={styles.contact}>
      <SectionPointer
        name="Let's Talk"
        style={pointerMarginTop}
        threshold={0.5}
      />
      <div className={styles.formContainer}>
        <p className={styles.intro}>
          Have a question or a project idea? Fill out the form below and I'll
          get back to you as soon as possible.👋
        </p>

        <form
          action="https://formspree.io/f/xgvrwkoz"
          method="POST"
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              rows={6}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send message
          </button>
        </form>
        <div className={styles.socials}>
          <p>Or find me on:</p>
          <div className="flex">
            <a
              href="https://github.com/hugokoks"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span>|</span>
            <a
              href="https://www.fiverr.com/david_kori"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fiver
            </a>
            <span>|</span>
            <a
              href="mailto:koritardev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

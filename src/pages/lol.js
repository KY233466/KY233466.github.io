import React, { useEffect, useRef } from "react";
import colorBlind from "color-blind";

const ColorWheelPicker = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const radius = canvas.width / 2;
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const dx = x - radius;
        const dy = y - radius;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= radius) {
          const angle = Math.atan2(dy, dx);
          const hue = ((angle * 180) / Math.PI + 360) % 360;
          const saturation = distance / radius;
          const value = 1.0;

          const [r, g, b] = hsvToRgb(hue, saturation, value);
          const [cb_r, cb_g, cb_b] = simulateColorBlind(r, g, b);

          const index = (y * canvas.width + x) * 4;
          data[index] = cb_r;
          data[index + 1] = cb_g;
          data[index + 2] = cb_b;
          data[index + 3] = 255;
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  const hsvToRgb = (h, s, v) => {
    let r, g, b;
    const i = Math.floor(h / 60);
    const f = h / 60 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    switch (i % 6) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;
      case 1:
        r = q;
        g = v;
        b = p;
        break;
      case 2:
        r = p;
        g = v;
        b = t;
        break;
      case 3:
        r = p;
        g = q;
        b = v;
        break;
      case 4:
        r = t;
        g = p;
        b = v;
        break;
      case 5:
        r = v;
        g = p;
        b = q;
        break;
    }

    return [r * 255, g * 255, b * 255];
  };

  const simulateColorBlind = (r, g, b) => {
    // Convert RGB values to hex
    const hexColor = rgbToHex(r, g, b);
    // Simulate color blindness
    // const simulatedColor = colorBlind.deuteranopia(hexColor);
    // Convert hex back to RGB
    return hexToRgb(hexColor);
  };

  const rgbToHex = (r, g, b) => {
    const toHex = (c) => ("0" + Math.round(c).toString(16)).slice(-2);
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  };

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={300}
      style={{ border: "1px solid black" }}
    />
  );
};

export default ColorWheelPicker;
